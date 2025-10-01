// User se number lena
var num = prompt("Koi number likhiye jiska table dekhna hai:");

// String ko number me convert karna
num = Number(num);

// Console me table print karna
console.log(num + " ka Table:");
for (var i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num * i));
}






















/* ================= HEADER ================= */
.header .nav-menu {
  display: flex;
  gap: 20px;
}
.icons {
  display: flex;
  gap: 15px;
}

/* Tablet / Mobile */
@media (max-width: 767px) {
  .nav-menu {
    flex-direction: column;
    gap: 10px;
  }
  .header .wrapper {
    flex-direction: column;
    align-items: center;
  }
  .icons {
    margin-top: 10px;
  }
}

/* Mobile Portrait */
@media (max-width: 480px) {
  .nav-menu {
    display: none; /* burger menu bana sakte ho later */
  }
  .icons img {
    width: 20px;
  }
}


/* ================= BEST SELLER ================= */
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}
.product {
  width: 23%; /* Desktop = 4 per row */
}

@media (max-width: 1024px) {
  .product { width: 30%; } /* 3 per row */
}
@media (max-width: 767px) {
  .product { width: 45%; } /* 2 per row */
}
@media (max-width: 620px) {
  .product { width: 48%; } /* 2 per row */
}
@media (max-width: 480px) {
  .product { width: 48%; } /* 2 per row */
}
@media (max-width: 400px) {
  .product { width: 100%; } /* 1 per row */
}


/* ================= RELATED PRODUCTS ================= */
.related-items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
}
.related-items .product {
  width: 23%; /* Desktop */
}

@media (max-width: 1024px) {
  .related-items .product { width: 30%; }
}
@media (max-width: 767px) {
  .related-items .product { width: 45%; }
}
@media (max-width: 620px) {
  .related-items .product { width: 48%; }
}
@media (max-width: 480px) {
  .related-items .product { width: 48%; }
}
@media (max-width: 400px) {
  .related-items .product { width: 100%; }
}


/* ================= PRODUCT DETAIL PAGE ================= */
.product-section {
  display: flex;
  gap: 20px;
}
.product-thumbs {
  width: 10%;
}
.product-image {
  width: 40%;
}
.product-info {
  width: 50%;
}

@media (max-width: 1024px) {
  .product-section {
    flex-direction: column;
    align-items: center;
  }
  .product-thumbs {
    order: 2;
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }
  .product-image,
  .product-info {
    width: 100%;
  }
}


/* ================= FOOTER ================= */
.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
.footer-column {
  flex: 1;
}

@media (max-width: 1024px) {
  .footer-content {
    flex-wrap: wrap;
    gap: 20px;
  }
  .footer-column {
    width: 45%;
  }
}

@media (max-width: 767px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-column {
    width: 100%;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}
