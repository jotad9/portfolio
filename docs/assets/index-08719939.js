(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.getElementById("date"),d=()=>{const o=new Date().getFullYear();l.textContent=o};d();const a=document.querySelector(".hamburger"),u=document.querySelector(".nav-list"),m=document.querySelector(".social-nav"),p=document.querySelectorAll(".nav-links"),f=document.getElementById("idiomas"),g=document.querySelectorAll("[data-section]"),i=()=>{a.classList.toggle("open"),u.classList.toggle("open"),m.classList.toggle("open"),document.body.classList.toggle("open")};p.forEach(o=>o.addEventListener("click",i));a.addEventListener("click",i);AOS.init();new Typed(".text",{strings:["Full Stack Developer","Frontend Developer","Backend Developer"],typeSpeed:140,backSpeed:60,backDeLay:60,loop:!0});const y=async o=>{const s=await(await fetch(`./idiomas/${o}.json`)).json();for(const n of g){const e=n.dataset.value,t=n.dataset.section;n.innerHTML=s[t][e]}};f.addEventListener("click",o=>{y(o.target.parentElement.dataset.language),typed2.strings=["Soy un apasionado de la programación, me encanta aprender y tener retos que me ayuden a creceaaar como profesional."]});