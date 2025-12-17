// Script para otimizar imagem de implantação do Mirage São Paulo
// Execute após exportar manualmente o PSD como JPG: node optimize-implantacao.cjs

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

const inputFile = path.join(__dirname, 'public', 'MirageSaoPaulo', 'implantacao.jpg');
const outputFile = path.join(__dirname, 'public', 'MirageSaoPaulo', 'implantacao.jpg');

// Verificar se o arquivo existe
if (!fs.existsSync(inputFile)) {
  console.log('❌ Arquivo de implantação não encontrado:', inputFile);
  console.log('\n📝 Por favor, primeiro exporte o PSD manualmente:');
  console.log('   1. Abra o arquivo "mirage são paulo/implantacao mirage em são paulo.psd" no Photoshop');
  console.log('   2. Exporte como JPG com qualidade 90%');
  console.log('   3. Redimensione para largura máxima de 1920px (mantendo proporção)');
  console.log(`   4. Salve como: ${inputFile}`);
  console.log('\n   Depois execute este script novamente para otimizar.');
  process.exit(1);
}

async function optimizeImage() {
  try {
    const stats = fs.statSync(inputFile);
    const originalSize = stats.size;
    console.log(`📊 Tamanho original: ${(originalSize / 1024 / 1024).toFixed(2)}MB\n`);
    
    console.log('🔄 Otimizando imagem...\n');
    
    // Otimizar imagem mantendo qualidade alta mas reduzindo tamanho
    await sharp(inputFile)
      .jpeg({ 
        quality: 85,  // Qualidade 85% (boa qualidade visual)
        progressive: true,  // JPEG progressivo para melhor carregamento
        mozjpeg: true  // Usar mozjpeg para melhor compressão
      })
      .resize(1920, null, {  // Redimensionar para largura máxima de 1920px mantendo proporção
        withoutEnlargement: true,
        fit: 'inside'
      })
      .toFile(outputFile + '.tmp');
    
    // Substituir original pela otimizada
    fs.unlinkSync(inputFile);
    fs.renameSync(outputFile + '.tmp', outputFile);
    
    const optimizedStats = fs.statSync(outputFile);
    const optimizedSize = optimizedStats.size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log('✅ Otimização concluída!');
    console.log(`📊 Tamanho otimizado: ${(optimizedSize / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📉 Redução: ${reduction}%`);
    console.log(`📁 Arquivo salvo em: ${outputFile}`);
    
  } catch (error) {
    console.error('❌ Erro ao otimizar:', error.message);
    process.exit(1);
  }
}

optimizeImage();

