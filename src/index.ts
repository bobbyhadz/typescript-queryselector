const input = document.querySelector('#message') as HTMLInputElement | null;

if (input != null) {
  console.log(input.value); // 👉️ "Initial value"
}