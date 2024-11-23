function wait() {
    window.location.href = 'wait.html';
}
function iya() {
    
    window.location.href = 'tebak.html';
}
function bukan() {
  
    const Salah = document.getElementById('salah');
    
  
    Salah.play().catch(function(error) {
        console.error("Audio tidak dapat diputar:", error);
    });

    
    Swal.fire({
        title: 'dihh!!',
        text: 'Kalo bukan jangan kesini! pergi sana hus hus!!🤬🤬🤬',
        imageUrl: 'assets/pergi.gif', 
        imageWidth: 200, 
        imageHeight: 200, 
        imageAlt: 'Custom image', 
    });
}

function simpan() {
    let tgl = document.getElementById("tgl").value;
    let bln = document.getElementById("bln").value;

    if (tgl === "23" && bln === "September") {
       
        Swal.fire({
            title: 'Benar!',
            text: 'Yeayyy ini bernaran pacar aku ><',
            imageUrl: 'assets/benar.gif', 
            imageWidth: 200, 
            imageHeight: 200, 
            imageAlt: 'Custom image', 
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "chapter1.html";
            }
        });
    } else {
        Swal.fire({
            title: 'Salah!',
            text: 'Kamu bukan pacarku!! gih pergi dari sini',
            imageUrl: 'assets/salah.gif', 
            imageWidth: 200, 
            imageHeight: 200, 
            imageAlt: 'Custom image'
        }).then(() => {
            const wrong = document.getElementById('salah');
        
            wrong.play().catch(function(error) {
                console.error("Audio tidak dapat diputar:", error);
            });
        });
    }
}

const text = "Makasi yaa kamu udah jadi pacar yang baikkkkk bangett buat akuu. kamu tau kan, aku beruntunggg bangett punya kamuuu. Kamu lucu, kamu baik, kamu cantikk, Sayangggg, terimakasih banyak ya buat semuanya. Terimakasih selama 2 bulan ini kamu selalu ada buat aku. Kalo gaada kamu, kehidupan aku gaakan se seru ini cengg. Terimakasih karena kamu selalu sayang sama aku. Maaf aku ga jago dalam berkata kata. But one thing that u must to know is... 'Aku Sayang Kamu Dan Akan Selalu Sayang Kamu' ❤️❤️❤️";
const typingTextElement = document.getElementById('typing-text');
let index = 0;

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); 
    }
}

window.onload = function() {
    type();
};



const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const muteUnmuteButton = document.getElementById('mute-unmute'); // Pastikan Anda memiliki elemen ini di HTML
const seekBar = document.getElementById('seek-bar');

// Event listener untuk play/pause
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Event listener untuk mute/unmute (jika ada elemen di HTML)
if (muteUnmuteButton) {
    muteUnmuteButton.addEventListener('click', () => {
        audio.muted = !audio.muted;
        muteUnmuteButton.textContent = audio.muted ? 'Unmute' : 'Mute';
    });
}

// Update seek bar saat audio diputar
audio.addEventListener('timeupdate', () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    seekBar.value = percentage;
});

// Seek audio saat seek bar diubah
seekBar.addEventListener('input', () => {
    const seekTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Memastikan seek bar diupdate setelah metadata audio dimuat
audio.addEventListener('loadedmetadata', () => {
    seekBar.max = 100; // Set max value untuk seek bar
});

function tofinal() {
    window.location.href = 'final.html';
}

function selesai() {
    window.open("https://wa.me/6281320207547", "_blank");
}