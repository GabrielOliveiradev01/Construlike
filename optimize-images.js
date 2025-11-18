// Script para otimizar imagens usando sharp
// Execute: node optimize-images.js

const fs = require('fs');
const path = require('path');

// Verificar se sharp está instalado
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('Instalando sharp...');
  const { execSync } = require('child_process');
  execSync('npm install sharp --save-dev', { stdio: 'inherit' });
  sharp = require('sharp');
}

const inputDir = path.join(__dirname, 'public', 'Perspectiva');
const outputDir = path.join(__dirname, 'public', 'Perspectiva');

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Listar todas as imagens JPG
const files = fs.readdirSync(inputDir).filter(file => 
  file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')
);

console.log(`Encontradas ${files.length} imagens para otimizar...`);

let totalOriginalSize = 0;
let totalOptimizedSize = 0;

async function optimizeImage(filename) {
  const inputPath = path.join(inputDir, filename);
  const outputPath = path.join(outputDir, filename.replace(/\.(jpg|jpeg)$/i, '_optimized.jpg'));
  
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    totalOriginalSize += originalSize;
    
    // Otimizar imagem mantendo qualidade alta mas reduzindo tamanho
    await sharp(inputPath)
      .jpeg({ 
        quality: 85,  // Qualidade 85% (boa qualidade visual)
        progressive: true,  // JPEG progressivo para melhor carregamento
        mozjpeg: true  // Usar mozjpeg para melhor compressão
      })
      .resize(1920, null, {  // Redimensionar para largura máxima de 1920px mantendo proporção
        withoutEnlargement: true,
        fit: 'inside'
      })
      .toFile(outputPath);
    
    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = optimizedStats.size;
    totalOptimizedSize += optimizedSize;
    
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    console.log(`✓ ${filename}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% redução)`);
    
    // Substituir original pela otimizada
    fs.unlinkSync(inputPath);
    fs.renameSync(outputPath, inputPath);
    
  } catch (error) {
    console.error(`✗ Erro ao otimizar ${filename}:`, error.message);
  }
}

async function optimizeAll() {
  console.log('Iniciando otimização...\n');
  
  for (const file of files) {
    await optimizeImage(file);
  }
  
  console.log('\n=== Resumo ===');
  console.log(`Tamanho original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Tamanho otimizado total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Redução total: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log('\nOtimização concluída!');
}

optimizeAll().catch(console.error);


