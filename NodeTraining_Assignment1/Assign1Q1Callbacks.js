function download(url,downloaded){
    console.log("Download started on" + url)
    setTimeout(function(){
        let file = url.split('/').pop()
        downloaded(file)
    },3000)
}

function compressFile(file,compressed){
    console.log("Compression started on",file)
    setTimeout(function(){
        if(-1 == ['mp4','ogg','webm'].indexOf(file.split('.').pop())){ 
            console.log("We are here after throwing error")
            throw new Error('Wrong format for compression')
        }
        let minfile = file.split('.')[0] + '.zip'
        compressed(minfile)
    },3000)
}

function encryptFile(file,encrypted)
{
    console.log("encryption started on",file)   
    setTimeout(function(){
        let encfile = file+ '.encyrypted'
        encrypted(encfile)
    },3000)
}

function uploadFile(encfile,uploaded){
    console.log("Uploading started of",encfile)
    setTimeout(function(){
        let uploadURL = 'https://newsite.com/'+encfile
        uploaded(uploadURL)
    },3000)
}

download("https://example.com/music.mp4",function(file){
    console.log("Download finished",file)
    compressFile(file,function(minfile){
        console.log("Compression completed as",minfile)
            encryptFile(minfile, function(encrypted){
                console.log("encryption completed as",encrypted)
                  uploadFile(encrypted,function(newUrl){
                    console.log("Uploading finished at",newUrl)
           })
        })
    })
})