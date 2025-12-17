// Script simplificado para converter imagem de implantação do Mirage São Paulo
// Execute: node convert-implantacao-simples.cjs

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputFile = path.join(__dirname, 'implantação mirage em são paulo.psd');
const outputDir = path.join(__dirname, 'public', 'MirageSaoPaulo');
const outputFile = path.join(outputDir, 'implantacao.jpg');

console.log('🔄 Conversão de Implantação - Mirage São Paulo\n');
console.log(`📥 Arquivo PSD: ${inputFile}`);
console.log(`📤 Arquivo JPG: ${outputFile}\n`);

// Verificar se o arquivo PSD existe
if (!fs.existsSync(inputFile)) {
  console.log('❌ Arquivo PSD não encontrado!');
  console.log(`   Procurando em: ${inputFile}\n`);
  process.exit(1);
}

// Criar diretório de saída se não existir
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`✅ Diretório criado: ${outputDir}\n`);
}

// Verificar se ImageMagick está disponível
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

const imagemagickCmd = checkImageMagick();

if (imagemagickCmd) {
  console.log(`✅ ImageMagick encontrado (${imagemagickCmd})\n`);
  console.log('🔄 Convertendo PSD para JPG...\n');
  
  try {
    // Converter usando ImageMagick
    execSync(`${imagemagickCmd} "${inputFile}[0]" -quality 90 -resize 1920x "${outputFile}"`, { stdio: 'inherit' });
    
    // Verificar se o arquivo foi criado
    if (fs.existsSync(outputFile)) {
      const stats = fs.statSync(outputFile);
      console.log('\n✅ Conversão concluída com sucesso!');
      console.log(`📁 Arquivo salvo em: ${outputFile}`);
      console.log(`📊 Tamanho: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);
      console.log('\n💡 Dica: Execute "node optimize-implantacao.cjs" para otimizar ainda mais a imagem.');
      process.exit(0);
    } else {
      throw new Error('Arquivo não foi criado');
    }
  } catch (error) {
    console.error('\n❌ Erro ao converter:', error.message);
    console.log('\n📝 Tente converter manualmente (veja instruções abaixo).\n');
  }
} else {
  console.log('⚠️  ImageMagick não encontrado.\n');
}

// Se chegou aqui, fornecer instruções manuais
console.log('📝 INSTRUÇÕES PARA CONVERSÃO MANUAL:\n');
console.log('1. Abra o Photoshop');
console.log(`2. Abra o arquivo: ${inputFile}`);
console.log('3. Vá em: File > Export > Export As...');
console.log('4. Configure:');
console.log('   - Formato: JPEG');
console.log('   - Qualidade: 90%');
console.log('   - Redimensione para largura máxima de 1920px (mantendo proporção)');
console.log(`5. Salve como: ${outputFile}`);
console.log('\n💡 OU instale ImageMagick e execute este script novamente:');
console.log('   brew install imagemagick');
console.log('\n📋 Após converter, execute para otimizar:');
console.log('   node optimize-implantacao.cjs\n');

process.exit(1);

