function App() {
  const classesToObserve = [
    {
      class: ".class-1",
      action: function (target, observer) {
        /* Action for class 1 */
        console.log("Class 1 intersecting with viewport");
        target.classList.add("is-visible");
        observer.unobserve(target);
      },
    },
    {
      class: ".class-2",
      action: function (target, observer) {
        /* Action for class 2 */
        console.log("Class 2 intersecting with viewport");
        target.classList.add("is-visible");
        observer.unobserve(target);
      },
    },
    {
      class: ".class-3",
      action: function (target, observer) {
        /* Action for class 3 */
        console.log("Class 3 intersecting with viewport");
        target.classList.add("is-visible");
        observer.unobserve(target);
      },
    },
  ];

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  classesToObserve.forEach((item) => {
    const items = document.querySelectorAll(item.class);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // The observed item is intersecting with the viewport
          item.action(entry.target, observer);
        }
      });
    }, options);

    items.forEach((item) => {
      console.log(">>>", item);
      observer.observe(item);
    });
  });

  return (
    <div>
      <h1>Scroll UP 🧐</h1>
      <div className="gap"></div>
      <div className="class-1">CLASS 01 🚀</div>
      <div className="gap"></div>
      <div className="class-2">CLASS 02 🚀</div>
      <div className="gap"></div>
      <div className="class-3">CLASS 03 🚀</div>
    </div>
  );
}

export default App;
