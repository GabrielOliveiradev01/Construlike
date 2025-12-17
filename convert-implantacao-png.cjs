// Script para converter PSD para PNG - Mirage São Paulo
// Execute: node convert-implantacao-png.cjs

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputFile = path.join(__dirname, 'implantação mirage em são paulo.psd');
const outputDir = path.join(__dirname, 'public', 'MirageSaoPaulo');
const outputFile = path.join(outputDir, 'implantacao.png');

console.log('🔄 Conversão PSD → PNG - Mirage São Paulo\n');
console.log(`📥 Entrada: ${inputFile}`);
console.log(`📤 Saída: ${outputFile}\n`);

// Verificar se o arquivo existe
if (!fs.existsSync(inputFile)) {
  console.log('❌ Arquivo PSD não encontrado!');
  process.exit(1);
}

// Criar diretório de saída
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Verificar ImageMagick
function checkImageMagick() {
  try {
    execSync('which convert', { stdio: 'ignore' });
    return 'convert';
  } catch (e) {
    try {
      execSync('which magick', { stdio: 'ignore' });
      return 'magick';
    } catch (e2) {
      return null;
    }
  }
}

const cmd = checkImageMagick();

if (cmd) {
  console.log(`✅ ImageMagick encontrado (${cmd})\n`);
  console.log('🔄 Convertendo...\n');
  
  try {
    // Converter para PNG
    execSync(`${cmd} "${inputFile}[0]" -resize 1920x -quality 95 "${outputFile}"`, { stdio: 'inherit' });
    
    if (fs.existsSync(outputFile)) {
      const stats = fs.statSync(outputFile);
      console.log('\n✅ Conversão concluída!');
      console.log(`📁 Arquivo: ${outputFile}`);
      console.log(`📊 Tamanho: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
      process.exit(0);
    }
  } catch (error) {
    console.error('\n❌ Erro:', error.message);
  }
}

// Instruções manuais
console.log('📝 CONVERSÃO MANUAL:\n');
console.log('1. Abra o Photoshop');
console.log(`2. Abra: ${inputFile}`);
console.log('3. File > Export > Export As...');
console.log('4. Configure:');
console.log('   • Formato: PNG');
console.log('   • Interlace: Nenhum');
console.log('   • Redimensione para largura máxima de 1920px');
console.log(`5. Salve como: ${outputFile}\n`);
console.log('💡 Ou instale ImageMagick:');
console.log('   brew install imagemagick\n');

process.exit(1);

