// Script para converter imagem de implantação do Mirage São Paulo
// Execute: node convert-implantacao.cjs

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputFile = path.join(__dirname, 'implantação mirage em são paulo.psd');
const outputDir = path.join(__dirname, 'public', 'MirageSaoPaulo');
const outputFile = path.join(outputDir, 'implantacao.png');

// Verificar se o arquivo existe
if (!fs.existsSync(inputFile)) {
  console.log('❌ Arquivo de implantação não encontrado:', inputFile);
  process.exit(1);
}

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🔄 Tentando converter PSD para PNG...\n');

  // Tentar usar ImageMagick (convert)
  try {
    execSync(`convert "${inputFile}[0]" -resize 1920x -quality 95 "${outputFile}"`, { stdio: 'inherit' });
    console.log('\n✅ Conversão concluída com ImageMagick (convert)');
    console.log(`📁 Arquivo salvo em: ${outputFile}`);
  } catch (e) {
    // Tentar usar ImageMagick (magick)
    try {
      execSync(`magick "${inputFile}[0]" -resize 1920x -quality 95 "${outputFile}"`, { stdio: 'inherit' });
      console.log('\n✅ Conversão concluída com ImageMagick (magick)');
      console.log(`📁 Arquivo salvo em: ${outputFile}`);
  } catch (e2) {
    console.log('\n⚠️  ImageMagick não encontrado.');
    console.log('\n📝 Para converter o arquivo PSD manualmente:');
    console.log('   1. Abra o arquivo "implantação mirage em são paulo.psd" (na raiz do projeto) no Photoshop');
    console.log('   2. Exporte como PNG: File > Export > Export As...');
    console.log('   3. Formato: PNG');
    console.log('   4. Redimensione para largura máxima de 1920px (mantendo proporção)');
    console.log(`   5. Salve como: ${outputFile}`);
    console.log('\n💡 Ou instale ImageMagick:');
    console.log('   macOS: brew install imagemagick');
    console.log('   Linux: sudo apt-get install imagemagick');
    process.exit(1);
  }
}

