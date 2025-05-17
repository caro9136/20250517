document.getElementById("draw-button").addEventListener("click", () => {
  const candidates = Array.from({ length: 25 }, (_, i) => i + 1);

  // Fisher-Yates Shuffle
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }

  const selected = candidates.slice(0, 4).sort((a, b) => a - b);
  const message = `✨ 오늘의 청소 당번은<br><strong>${selected.join(', ')}번</strong> 입니다!`;

  // SweetAlert2 팝업
  Swal.fire({
    title: '청소 당번 발표 🎉',
    html: message,
    icon: 'success',
    confirmButtonText: '확인',
    confirmButtonColor: '#4CAF50',
    background: '#f0fdf4',
    color: '#333',
    backdrop: true
  });

  // 결과도 하단에 텍스트로 표시 (optional)
  document.getElementById("result").textContent = `당번: ${selected.join(", ")}번`;
});
