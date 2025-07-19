# EVA – Enhanced Virtual Assistant 🧠💻

**Dari Ide ke Kode Python, Tanpa Stres dan Tanpa Ribet.**

EVA adalah asisten virtual cerdas berbasis AI yang dirancang untuk membantu manusia menulis kode Python dari ide alami — dengan presisi, kejelasan, dan logika Ai .

---

## 🎯 Tujuan Proyek

Membantu siapapun, dari pemula hingga profesional, menerjemahkan ide menjadi sebuah produk nyata siap pakai menggunakan Bahasa Pemrograman Python  melalui antarmuka sederhana dan dialog yang alami.

---

## 🧱 Pilar Utama EVA

### 1. 🟦 **Kemudahan**
> EVA diciptakan agar manusia bisa menulis program tanpa merasa perlu menjadi ahli sintaks.

- Input cukup dengan bahasa manusia biasa
- Antarmuka modern, cerah, dan intuitif
- Alur kerja bertahap (Ide → Pseudocode → Kode Python)
- Hasil dapat langsung diunduh dalam format `.py`
- EVA menjelaskan langkah-langkahnya secara ringan jika diminta

---

### 2. 🤖 **Pemahaman AI (Kontextual Intelligence)**
> EVA tidak hanya menjawab, tapi juga *mengerti apa yang kamu butuhkan.*

- Membaca struktur folder dan file dari proyek Python
- Menyesuaikan hasil kode dengan konteks proyek
- Memberi saran berdasarkan dependensi, modul, dan fungsi yang sudah ada
- Menghasilkan kode yang tidak hanya benar, tapi juga relevan dan rapi

---

## 🔄 Alur Kerja EVA

1. **User Melakukan Proses Login**  
   Untuk bisa menggunakan Platform EVA user harus melakukan prosedur Login.
2. **Discuss With EVA**   
   User dapat berdiskusi dengan EVA Assitent AI untuk merumuskan konsep Project yang akan di buat.
3. **Finalisasi Diskusi**  
   Hasil Final dari Diskusi dengan AI akan di Dokumentasikan menjadi Konsep Utama Project yang di buat.
4. **User menghubungkan EVA dengan Visual Studio**   
   DEngan menghubungkan AI dengan Visual Studio membuat AI dapat membaca dan memahami Project secara utuh
5. **User Mendeskripsikan Ide**  
   User menulid drskripsi ide dengan Bahasa Alami Manusia
6. **Ai Menterjemahkan Ide ke format NLP**
   Ai menterjemah ide yang sudah di tulis menjadi format NLP untuk menguji pemahaman AI tentang Project yang akan di buat
8. **Ai Menterjemahkan NLP Menjadi Pseocode**
   Ai terlebih dahulu menuliskan Psecode untuk memastikan antara User dan AI sudah memiliki pemahaman yang sama
9. **Ai Menuliskan Code Berdasarkan Psecode **
   Ai menuliskan code berdasarkan Pseocode yang telah di buat sehingga akan menghasilkan kode yang sesuai dengan koteks project
    

---

## 🧠 Contoh Kasus

> "Saya ingin membaca file Excel, membersihkan data kosong, dan menghitung rata-rata."

Output:
```python
import pandas as pd

df = pd.read_excel("data.xlsx")
df_clean = df.dropna()
mean = df_clean.mean()
print(mean)
