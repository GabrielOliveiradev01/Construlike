// Script para converter PSD para PNG - Tenta múltiplas abordagens
// Execute: node converter-psd-png.cjs

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

const inputFile = path.join(__dirname, 'implantação mirage em são paulo.psd');
const outputFile = path.join(__dirname, 'public', 'MirageSaoPaulo', 'implantacao.png');

console.log('🔄 Conversão PSD → PNG\n');
console.log(`📥 Entrada: ${inputFile}`);
console.log(`📤 Saída: ${outputFile}\n`);

// Verificar se o arquivo existe
if (!fs.existsSync(inputFile)) {
  console.log('❌ Arquivo PSD não encontrado!');
  process.exit(1);
}

// Criar diretório de saída
const outputDir = path.dirname(outputFile);
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

// Tentar converter com ImageMagick
const cmd = checkImageMagick();

if (cmd) {
  console.log(`✅ ImageMagick encontrado (${cmd})\n`);
  console.log('🔄 Convertendo...\n');
  
  try {
    // Converter PSD para PNG
    execSync(`${cmd} "${inputFile}[0]" -resize 1920x -quality 95 "${outputFile}"`, { stdio: 'inherit' });
    
    if (fs.existsSync(outputFile)) {
      const stats = fs.statSync(outputFile);
      console.log('\n✅ Conversão concluída com sucesso!');
      console.log(`📁 Arquivo: ${outputFile}`);
      console.log(`📊 Tamanho: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
      console.log('\n🎉 A imagem de implantação está pronta!');
      process.exit(0);
    }
  } catch (error) {
    console.error('\n❌ Erro ao converter:', error.message);
  }
} else {
  console.log('⚠️  ImageMagick não encontrado.\n');
  
  // Verificar se está instalando
  try {
    const brewCheck = execSync('brew list imagemagick 2>&1', { encoding: 'utf-8' });
    if (brewCheck.includes('imagemagick')) {
      console.log('✅ ImageMagick está instalado, mas não está no PATH.');
      console.log('💡 Tente executar: export PATH="/usr/local/bin:$PATH"');
      console.log('   Depois execute este script novamente.\n');
    }
  } catch (e) {
    console.log('⏳ ImageMagick ainda não está instalado.');
    console.log('💡 A instalação pode estar em andamento...\n');
  }
}

// Instruções finais
console.log('📝 CONVERSÃO MANUAL (mais rápido):\n');
console.log('1. Abra o Photoshop');
console.log(`2. Abra: ${inputFile}`);
console.log('3. File > Export > Export As...');
console.log('4. Configure:');
console.log('   • Formato: PNG');
console.log('   • Interlace: Nenhum');
console.log('   • Redimensione para largura máxima de 1920px');
console.log(`5. Salve como: ${outputFile}\n`);

console.log('💡 OU aguarde a instalação do ImageMagick terminar:');
console.log('   brew list imagemagick  # Verificar se instalou');
console.log('   node converter-quando-pronto.cjs  # Converter depois\n');

process.exit(1);

