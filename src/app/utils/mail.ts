// Copies text to the clipboard and shows a short notice (works in any browser, no popups)
export function toast(msg: string) {
  const t = document.createElement('div');
  t.textContent = msg;
  t.style.cssText = 'position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:var(--card);color:var(--txt);border:1px solid var(--a);padding:12px 20px;border-radius:99px;z-index:50;box-shadow:0 10px 40px #0008;font-size:.9rem';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

export async function copyText(text: string, notice: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const x = document.createElement('textarea');
    x.value = text;
    document.body.appendChild(x);
    x.select();
    try {
      document.execCommand('copy');
    } catch {}
    x.remove();
  }
  toast(notice);
}

export function copyMail(email: string) {
  return copyText(email, 'Correo copiado: ' + email);
}
