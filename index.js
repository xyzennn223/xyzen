<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Artikel Pendidikan</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: Arial, sans-serif;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: url("foto.png") no-repeat center center fixed;
      background-size: cover;
    }

    .content {
      background: rgba(0, 0, 0, 0.7);
      padding: 40px;
      border-radius: 10px;
      max-width: 800px;
      text-align: center;
    }

    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
      line-height: 1.8;
      text-align: justify;
      margin-bottom: 15px;
    }

    .btn {
      background-color: #f39c12;
      color: white;
      padding: 12px 25px;
      border: none;
      cursor: pointer;
      font-size: 16px;
      border-radius: 5px;
      margin-top: 20px;
    }

    .btn:hover {
      background-color: #e67e22;
    }

    video {
      display: none;
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      object-fit: cover; /* Video akan mengisi layar penuh */
    }
  </style>
</head>
<body>

  <div class="content">
    <h1>Pendidikan untuk Masa Depan</h1>
    <p>
      Pendidikan adalah salah satu pilar utama dalam membangun masyarakat yang maju dan beradab.  
      Dengan pendidikan, setiap individu memiliki kesempatan untuk memperluas wawasan,  
      meningkatkan kemampuan diri, serta berkontribusi bagi kemajuan bangsa.  
    </p>
    <p>
      Dalam era digital seperti sekarang ini, pentingnya pendidikan semakin nyata.  
      Teknologi berkembang begitu pesat, dan hanya mereka yang terus belajar dan beradaptasi  
      yang dapat menghadapi tantangan masa depan.  
    </p>
    <p>
      Mari kita terus menghargai pentingnya pendidikan dan berkomitmen  
      untuk menjadi pembelajar sepanjang hayat.  
      Klik tombol di bawah untuk informasi menarik selanjutnya.  
    </p>
    <button class="btn" onclick="playVideo()">Baca Lebih Lanjut</button>
  </div>

  <video id="prankVideo" controls autoplay>
    <source src="video.mp4" type="video/mp4">
    Browser Anda tidak mendukung video tag.
  </video>

  <script>
    function playVideo() {
      const video = document.getElementById("prankVideo");
      video.style.display = "block";
      video.requestFullscreen(); // Memastikan video langsung full layar
      video.play();
    }
  </script>

</body>
</html>
