// Script para otimizar imagens do Mirage São Paulo usando sharp
// Execute: node optimize-mirage-sao-paulo.js

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

const inputBaseDir = path.join(__dirname, 'mirage são paulo');
const outputBaseDir = path.join(__dirname, 'public', 'MirageSaoPaulo');

// Criar diretórios de saída se não existirem
const outputPerspectivaDir = path.join(outputBaseDir, 'Perspectiva');
const outputPlantasDir = path.join(outputBaseDir, 'Plantas');

if (!fs.existsSync(outputPerspectivaDir)) {
  fs.mkdirSync(outputPerspectivaDir, { recursive: true });
}
if (!fs.existsSync(outputPlantasDir)) {
  fs.mkdirSync(outputPlantasDir, { recursive: true });
}

let totalOriginalSize = 0;
let totalOptimizedSize = 0;

async function optimizeImage(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;
    totalOriginalSize += originalSize;
    
    // Otimizar imagem mantendo qualidade alta mas reduzindo tamanho
    // Primeiro redimensionar para reduzir pixels se necessário
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Se a imagem for muito grande, redimensionar primeiro
    let pipeline = image;
    if (metadata.width > 10000 || metadata.height > 10000) {
      // Redimensionar para um tamanho mais gerenciável primeiro
      pipeline = pipeline.resize(8000, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    await pipeline
      .resize(1920, null, {  // Redimensionar para largura máxima de 1920px mantendo proporção
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: 85,  // Qualidade 85% (boa qualidade visual)
        progressive: true,  // JPEG progressivo para melhor carregamento
        mozjpeg: true  // Usar mozjpeg para melhor compressão
      })
      .toFile(outputPath);
    
    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = optimizedStats.size;
    totalOptimizedSize += optimizedSize;
    
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    const filename = path.basename(inputPath);
    console.log(`✓ ${filename}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% redução)`);
    
  } catch (error) {
    console.error(`✗ Erro ao otimizar ${path.basename(inputPath)}:`, error.message);
  }
}

async function processDirectory(inputDir, outputDir, dirName) {
  if (!fs.existsSync(inputDir)) {
    console.log(`⚠ Pasta ${dirName} não encontrada: ${inputDir}`);
    return;
  }

  // Listar todas as imagens (JPG, JPEG, JPG)
  const files = fs.readdirSync(inputDir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg' || ext === '.jpeg';
  });

  console.log(`\n📁 Processando ${dirName}: ${files.length} imagens encontradas...\n`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);
    await optimizeImage(inputPath, outputPath);
  }
}

async function optimizeAll() {
  console.log('🚀 Iniciando otimização das imagens do Mirage São Paulo...\n');
  
  // Processar Perspectiva
  const inputPerspectivaDir = path.join(inputBaseDir, 'Perspectiva');
  await processDirectory(inputPerspectivaDir, outputPerspectivaDir, 'Perspectiva');
  
  // Processar Plantas
  const inputPlantasDir = path.join(inputBaseDir, 'Plantas');
  await processDirectory(inputPlantasDir, outputPlantasDir, 'Plantas');
  
  console.log('\n=== 📊 Resumo ===');
  console.log(`Tamanho original total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Tamanho otimizado total: ${(totalOptimizedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Redução total: ${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}%`);
  console.log('\n✅ Otimização concluída!');
}

optimizeAll().catch(console.error);

