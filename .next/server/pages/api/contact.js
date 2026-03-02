"use strict";(()=>{var e={};e.id=91,e.ids=[91],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,r)=>{Object.defineProperty(r,"l",{enumerable:!0,get:function(){return function e(r,t){return t in r?r[t]:"then"in r&&"function"==typeof r.then?r.then(r=>e(r,t)):"function"==typeof r&&"default"===t?r:void 0}}})},6696:(e,r,t)=>{t.r(r),t.d(r,{config:()=>d,default:()=>c,routeModule:()=>P});var n={};t.r(n),t.d(n,{POST:()=>p});var o=t(1802),s=t(7153),a=t(6249);let i=require("next/server"),u=require("nodemailer");var l=t.n(u);async function p(e){try{let{name:r,email:t,phone:n,service:o,message:s}=await e.json(),a=l().createTransport({service:"gmail",auth:{user:"rachtechirrigation@gmail.com",pass:process.env.EMAIL_APP_PASSWORD}}),u={from:`"${r}" <${t}>`,to:"kunakatadiwanashe99@gmail.com",subject:`New Inquiry: ${o||"General Inquiry"}`,html:`
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #0077be;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${r}</p>
          <p><strong>Email:</strong> ${t}</p>
          <p><strong>Phone:</strong> ${n||"Not provided"}</p>
          <p><strong>Service:</strong> ${o||"N/A"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${s}</p>
        </div>
      `};return await a.sendMail(u),i.NextResponse.json({message:"Email sent successfully"},{status:200})}catch(e){return console.error("Email error:",e),i.NextResponse.json({error:"Failed to send email"},{status:500})}}let c=(0,a.l)(n,"default"),d=(0,a.l)(n,"config"),P=new o.PagesAPIRouteModule({definition:{kind:s.x.PAGES_API,page:"/api/contact",pathname:"/api/contact",bundlePath:"",filename:""},userland:n})},7153:(e,r)=>{var t;Object.defineProperty(r,"x",{enumerable:!0,get:function(){return t}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(t||(t={}))},1802:(e,r,t)=>{e.exports=t(145)}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=r(r.s=6696);module.exports=t})();