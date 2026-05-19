---
name: Rahman Qolbi Portfolio
description: "The Cozy Forest Terminal: A warm, tactile, and minimalist personal developer website."
colors:
  primary: "#D8E9A8"
  neutral-bg: "#191A19"
  card-bg: "#1E5128"
  shadow-dark: "#1a4522"
  shadow-light: "#235d2e"
typography:
  display:
    fontFamily: "Quicksand, sans-serif"
    fontSize: "xx-large"
    fontWeight: 900
    lineHeight: 1.2
  headline:
    fontFamily: "Quicksand, sans-serif"
    fontSize: "x-large"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Quicksand, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  btn: "10px"
  btn-mobile: "5px"
  img: "20px"
  card: "50px"
  profile: "100px"
spacing:
  container: "1140px"
  card-padding: "16px"
components:
  button-primary:
    backgroundColor: "{colors.card-bg}"
    textColor: "{colors.primary}"
    rounded: "{rounded.btn}"
    padding: "6px 16px"
  button-primary-hover:
    backgroundColor: "{colors.card-bg}"
    textColor: "{colors.primary}"
    rounded: "{rounded.btn}"
    padding: "6px 16px"
---

# Design System: Rahman Qolbi Portfolio

## 1. Overview

**Creative North Star: "The Cozy Forest Terminal"**

"The Cozy Forest Terminal" menggabungkan kehangatan nuansa alam hijau hutan yang tenang dengan fungsionalitas dan kepraktisan minimalis khas terminal konsol developer. Tampilan ini didesain agar terasa bersahabat bagi sesama pengembang (fellow developers), mengesampingkan gimik korporat yang kaku, dan berfokus pada penyajian profil yang jujur, santai, namun memiliki tingkat craftmanship yang tinggi.

Sistem ini didesain 100% responsif dengan mode statis super cepat dan transisi navigasi instan khas Single-Page Application (SPA).

**Key Characteristics:**
- **Tactile Comfort**: Menggunakan kartu-kartu berlekuk sangat membulat (50px) dengan bayangan tebal bertumpuk yang memberikan kesan empuk dan nyata saat disentuh.
- **Deep Muted Contrast**: Perpaduan kontras warna gelap pinus dengan pendaran aksen hijau jeruk nipis elektrik yang nyaman di mata untuk sesi membaca lama.
- **Strictly Minimalist**: Menghindari elemen garis hiasan/pembatas buatan yang tidak fungsional, membiarkan whitespace dan bayangan bekerja mengatur tata letak.

## 2. Colors

Palet warna disusun dengan skema warna terikat (committed) yang mendominasi seluruh permukaan untuk menyampaikan identitas brand secara mendalam dan konsisten.

### Primary
- **Electric Lime Bud** (#D8E9A8): Warna aksen utama untuk teks menonjol, tombol aktif, hover tab, dan border ikon. Membawa pendaran energi modern khas terminal tanpa menyilaukan mata.

### Neutral
- **Midnight Pine** (#191A19): Warna latar belakang utama seluruh halaman. Sangat gelap, memberikan atmosfer yang teduh dan rileks.
- **Deep Forest Sage** (#1E5128): Warna pengisi untuk kartu biodata, portofolio, dan form kontak. Memberikan kedalaman layer yang kontras namun tetap harmonis dengan latar Midnight Pine.

### Named Rules
**The Forest Rarity Rule.** Warna Electric Lime Bud digunakan maksimal pada 15% dari total visual halaman. Peran aksen ini harus dihemat hanya untuk elemen interaktif (tombol, link aktif, hover) agar maknanya tetap kuat.

## 3. Typography

**Display Font:** Quicksand (dengan sans-serif fallback)
**Body Font:** Quicksand (dengan sans-serif fallback)

Seluruh sistem menggunakan satu rumpun font tunggal (*Quicksand*) yang membulat (rounded) untuk memperkuat kesan bersahabat, santai, dan modern.

### Hierarchy
- **Display** (900, xx-large, 1.2): Digunakan untuk nama utama "Saya Rahman Qolbi" di halaman utama untuk penegasan identitas yang kokoh.
- **Headline** (500, x-large, 1.3): Digunakan untuk sapaan pembuka "Halo Semua...", sub-judul, dan header utama kartu section.
- **Body** (400, 14px, 1.5): Digunakan untuk seluruh paragraf deskripsi proyek, teks biodata, dan teks tautan. Lebar teks diatur agar tidak melebihi (65-75ch) demi kenyamanan membaca yang maksimal.

## 4. Elevation

Sistem ini menolak penggunaan bayangan blur modern yang halus (soft blur shadows) secara dekoratif. Kedalaman visual dibangun menggunakan bayangan neomorphic padat yang tegas untuk memberikan sensasi taktil seperti balok fisik.

### Shadow Vocabulary
- **Tactile Shadow Double** (`box-shadow: 7px -7px 1px #1a4522, -7px 7px 1px #235d2e`): Kombinasi bayangan offset 7px arah kanan-atas bernuansa gelap dan kiri-bawah bernuansa hijau terang untuk kartu pengisi (cards). Memberikan efek timbul tiga dimensi yang tegas.
- **Circular Tactile Shadow** (`box-shadow: 7px -7px 5px #1a4522, -7px 7px 5px #235d2e`): Digunakan khusus pada gambar lingkaran profil biodata untuk menyelaraskannya dengan kedalaman kartu.

### Named Rules
**The Flat-at-Rest Rule.** Tombol (`.btn`) dan kartu bersifat statis dengan bayangan neumorfik saat diam. Efek transisi bayangan lembut dan perubahan opacity hanya terjadi secara halus saat merespons interaksi aktif kursor (hover/focus).

## 5. Components

Setiap komponen didesain agar terasa fungsional, bersih, bersahabat, dan konsisten di setiap perangkat.

### Buttons
- **Shape:** Membulat ramah (10px border-radius, mengecil menjadi 5px di layar mobile ≤768px).
- **Primary Button (`.btn`)**: Latar Deep Forest Sage (#1E5128) dengan border 1px padat Electric Lime Bud (#D8E9A8), dan teks berwarna Electric Lime Bud.
- **Hover State**: Mengurangi opacity menjadi `0.6` dengan transisi opacity yang halus untuk memberikan efek klik instan yang menyenangkan.

### Cards / Containers
- **Corner Style**: Sudut membulat ekstrem (50px border-radius) untuk memberikan kesan empuk (tactile soft block).
- **Background**: Deep Forest Sage (#1E5128).
- **Shadow**: Menggunakan Tactile Shadow Double secara konsisten.
- **Internal Padding**: Spacing internal longgar (16px, dikurangi menjadi 14px di mobile).

### Navigation
- **Header & Navbar**: Memiliki logo orisinal "rhmnq" dengan bayangan teks lembut. Menampilkan navigasi tab horizontal yang bersih.
- **Active State**: Menandai link aktif dengan kelas `.active` yang memberikan warna solid dan opacity penuh.
- **Mobile Menu**: Di bawah ukuran layar 576px, berubah menjadi hamburger menu yang bersih dengan panel navigasi bertumpuk semi-transparan (`backdrop-filter: blur(11.5px)`).

## 6. Do's and Don'ts

### Do:
- **Do** pertahankan font *Quicksand* di seluruh bagian teks untuk konsistensi ramah dan santai.
- **Do** gunakan rasio kontras tinggi antara Electric Lime Bud (#D8E9A8) dengan warna Midnight Pine (#191A19) untuk memastikan teks sangat mudah dibaca.
- **Do** pastikan semua sudut kartu berukuran besar (50px) agar filosofi "Tactile Soft Blocks" tetap terjaga secara konsisten.
- **Do** gunakan path absolut `/img/...` untuk semua aset statis di halaman portofolio, kemampuan, dan kontak agar bebas dari broken links.

### Don't:
- **Don't** menggunakan side-stripe borders (garis aksen tebal berwarna di sisi kiri/kanan kartu) sebagai hiasan, karena ini merusak kesederhanaan minimalis "Cozy Forest".
- **Don't** mencampuradukkan font lain (seperti Roboto atau Inter) ke dalam halaman tanpa alasan yang kuat.
- **Don't** menumpuk kartu di dalam kartu (nested cards); biarkan tata letak teratur secara alami menggunakan layout baris dan kolom.
- **Don't** menggunakan warna teks putih murni (#ffffff) atau hitam murni (#000000); semua warna netral harus ter-tint lembut dengan rona hijau Midnight Pine.
