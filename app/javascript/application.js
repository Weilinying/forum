// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import "trix";
import "@rails/actiontext";
import hljs from "highlight.js";
hljs.configure({ cssSelector: "pre" });
document.addEventListener("turbo:load", () => {
    hljs.highlightAll();
    MathJax.typeset();
});
