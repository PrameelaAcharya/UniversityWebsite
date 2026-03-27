const form = document.getElementById("applyForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    course: form.course.value,
    address: form.address.value
  };

  console.log("🚀 Sending data:", data);  // 👈 add this

  await fetch("http://localhost:5000/api/apply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
});