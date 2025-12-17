-- AppleScript para converter PSD para PNG usando Photoshop
-- Execute: osascript convert-psd-to-png-photoshop.applescript

tell application "Finder"
	set psdPath to POSIX file "/Users/macbook/Desktop/Poligono/Construlike - Projeto/implantacao mirage em sao paulo.psd"
	set pngPath to POSIX file "/Users/macbook/Desktop/Poligono/Construlike - Projeto/public/MirageSaoPaulo/implantacao.png"
end tell

tell application "Adobe Photoshop 2024" or application "Adobe Photoshop 2023" or application "Adobe Photoshop 2022" or application "Adobe Photoshop 2021" or application "Adobe Photoshop CC 2020" or application "Adobe Photoshop CC 2019"
	activate
	open file psdPath
	tell current document
		-- Redimensionar se necessário (largura máxima 1920px)
		if width > 1920 then
			resize image width 1920 height (height * (1920 / width)) resolution 72 resampling method bicubic
		end if
		-- Exportar como PNG
		export in file pngPath as PNG with options {compression:0, interlaced:false}
	end tell
	close current document saving no
end tell

