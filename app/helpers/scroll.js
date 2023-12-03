export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  export const toggleScroll = (condition) => {
    if (condition) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  
  export const onWindowScroll = () => {
    const sections = document.querySelectorAll("section"); 
    let currentSectionId = "";
  
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
  
      if (
        sectionTop - window.scrollY <= 110 &&
        sectionTop + rect.height > window.scrollY
      ) {
        currentSectionId = section.id;
      }
    });
  
    localStorage.setItem("menu", currentSectionId || "Main");
  };
  
  export const onHeaderChange = (setState) => {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition > 100) {
        setState(true);
      } else {
        setState(false);
      }
    });
  };
  
  export const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
  
    if (section) {
      const sectionTop = section.offsetTop - 110;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };