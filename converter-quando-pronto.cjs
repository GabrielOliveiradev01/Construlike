// Script para converter quando ImageMagick estiver instalado
// Execute: node converter-quando-pronto.cjs

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputFile = path.join(__dirname, 'implantação mirage em são paulo.psd');
const outputFile = path.join(__dirname, 'public', 'MirageSaoPaulo', 'implantacao.png');

console.log('🔄 Verificando ImageMagick e convertendo...\n');

// Verificar se o arquivo existe
if (!fs.existsSync(inputFile)) {
  console.log('❌ Arquivo PSD não encontrado:', inputFile);
  process.exit(1);
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

if (!cmd) {
  console.log('⏳ ImageMagick ainda não está instalado.');
  console.log('💡 Aguarde a instalação terminar e execute este script novamente.\n');
  console.log('   Para verificar o status: brew list imagemagick');
  process.exit(1);
}

console.log(`✅ ImageMagick encontrado (${cmd})\n`);
console.log(`📥 Convertendo: ${inputFile}`);
console.log(`📤 Para: ${outputFile}\n`);

// Criar diretório se não existir
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

try {
  // Converter PSD para PNG
  execSync(`${cmd} "${inputFile}[0]" -resize 1920x -quality 95 "${outputFile}"`, { stdio: 'inherit' });
  
  if (fs.existsSync(outputFile)) {
    const stats = fs.statSync(outputFile);
    console.log('\n✅ Conversão concluída com sucesso!');
    console.log(`📁 Arquivo: ${outputFile}`);
    console.log(`📊 Tamanho: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
    console.log('\n🎉 A imagem de implantação está pronta!');
  } else {
    throw new Error('Arquivo não foi criado');
  }
} catch (error) {
  console.error('\n❌ Erro ao converter:', error.message);
  process.exit(1);
}

