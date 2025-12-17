// Script para converter imagem de implantação do Mirage São Paulo
// Tenta instalar ImageMagick automaticamente se necessário
// Execute: node convert-implantacao-auto.cjs

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputFile = path.join(__dirname, 'implantação mirage em são paulo.psd');
const outputDir = path.join(__dirname, 'public', 'MirageSaoPaulo');
const outputFile = path.join(outputDir, 'implantacao.jpg');

// Verificar se o arquivo existe
if (!fs.existsSync(inputFile)) {
  console.log('❌ Arquivo de implantação não encontrado:', inputFile);
  console.log('\n📁 Procurando arquivo...');
  const { execSync } = require('child_process');
  try {
    const result = execSync('find . -name "*implant*.psd" -type f 2>/dev/null | head -1', { encoding: 'utf-8' }).trim();
    if (result) {
      console.log(`✅ Encontrado: ${result}`);
      console.log(`\n💡 Atualize o script para usar: ${result}`);
    }
  } catch (e) {
    // Ignorar erro
  }
  process.exit(1);
}

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('🔄 Tentando converter PSD para JPG...\n');
console.log(`📥 Entrada: ${inputFile}`);
console.log(`📤 Saída: ${outputFile}\n`);

// Função para verificar se ImageMagick está instalado
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

// Função para tentar instalar ImageMagick
function tryInstallImageMagick() {
  console.log('📦 ImageMagick não encontrado. Tentando instalar via Homebrew...\n');
  try {
    execSync('brew install imagemagick', { stdio: 'inherit' });
    console.log('\n✅ ImageMagick instalado com sucesso!\n');
    return true;
  } catch (e) {
    console.log('\n⚠️  Não foi possível instalar ImageMagick automaticamente.');
    return false;
  }
}

// Verificar se ImageMagick está disponível
let imagemagickCmd = checkImageMagick();

if (!imagemagickCmd) {
  console.log('⚠️  ImageMagick não encontrado.');
  const install = tryInstallImageMagick();
  if (install) {
    imagemagickCmd = checkImageMagick();
  }
}

if (imagemagickCmd) {
  try {
    console.log(`🔄 Usando ${imagemagickCmd}...\n`);
    execSync(`${imagemagickCmd} "${inputFile}[0]" -quality 90 -resize 1920x "${outputFile}"`, { stdio: 'inherit' });
    console.log('\n✅ Conversão concluída com sucesso!');
    console.log(`📁 Arquivo salvo em: ${outputFile}`);
    
    // Verificar tamanho do arquivo
    const stats = fs.statSync(outputFile);
    console.log(`📊 Tamanho: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
    
    process.exit(0);
  } catch (e) {
    console.error('\n❌ Erro ao converter:', e.message);
  }
}

// Se chegou aqui, não conseguiu converter
console.log('\n⚠️  Não foi possível converter automaticamente.');
console.log('\n📝 Para converter o arquivo PSD manualmente:');
console.log('   1. Abra o arquivo "implantação mirage em são paulo.psd" (na raiz do projeto) no Photoshop');
console.log('   2. Exporte como JPG: File > Export > Export As...');
console.log('   3. Configure:');
console.log('      - Formato: JPEG');
console.log('      - Qualidade: 90%');
console.log('      - Redimensione para largura máxima de 1920px (mantendo proporção)');
console.log(`   4. Salve como: ${outputFile}`);
console.log('\n💡 Ou instale ImageMagick manualmente:');
console.log('   brew install imagemagick');
console.log('   Depois execute este script novamente.');

process.exit(1);

