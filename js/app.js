document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const filters = new FormData(this);
    const query = {};
    filters.forEach((value, key) => {
      if (value) query[key] = value;
    });
  
    console.log("Filters Applied:", query);
    // ارسال درخواست به سرور یا اجرای جستجوی محلی
  });