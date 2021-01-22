function download(url){
    return new Promise((resolve,reject)=>{
        console.log("Download started on ",url)
        setTimeout(()=>{
            let file = url.split('/').pop()
            resolve(file)
        },1000)
    })
}

function compressFile(file){
    return new Promise((resolve,reject)=>{
        if(-1 == ['mp4','ogg','webm'].indexOf(file.split('.').pop())){ 
            reject('Wrong extension of file, it should be mp4, ogg or webm')
            console.log("We are here after throwing error")
        }
        console.log("Compression started on file",file)
        setTimeout(()=>{
            let minfile = file.split('.')[0] + '.zip'
            resolve(minfile)
        },1000)
    })
}

function encryptFile(file)
{   return new Promise((resolve,reject)=>{
    console.log("encryption started on",file)   
    setTimeout(function(){
        let encfile = file+ '.encyrypted'
        resolve(encfile)
        },1000)
    })
}


function uploadFile(filecompress){
    return new Promise((resolve,reject)=>{
        console.log('Starting upload of file',filecompress)
        setTimeout(()=>{
            let newURL = 'https://newsite.com/'+filecompress
            resolve(newURL)
        },1000)
    })
}

//Efficient way
    download("https://example.com/music.mp4")
    .then(compressFile)
    .then(encryptFile)
    .then(uploadFile)
    .catch(function(err){
        console.error(err.message)
    })

// 2nd way
download("https://example.com/music.mp4").then(function(file){
    return compressFile(file)
}).then(function(filecompress){
    return encryptFile(filecompress)
}).then(function(encfile){
    return uploadFile(encFile)
}).then(function(newURL){
    console.log('File uploaded at',newURL)
}).catch(function(err){
    console.error(err.message)
})

// 1st way
p.then(function(file){
    console.log("Download completed as",file)
    compressFile(file).then(function(filecompress){
        console.log('File compressed as',filecompress)
           encryptFile(file).then(function(encfile){
             console.log("encryption completed")
               uploadFile(filecompress).then(function(newURL){
                 console.log('File uploaded at',newURL)
            })
        })
    })
})