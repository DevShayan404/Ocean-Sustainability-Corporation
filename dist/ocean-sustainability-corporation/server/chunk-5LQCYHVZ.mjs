import './polyfills.server.mjs';
import{b as s,d as o,g as r,qa as n}from"./chunk-BU3J4T6Q.mjs";var c=(()=>{let t=class t{constructor(e){this.http=e,this.isVisibleFooterSection=new s(!0),this.isVisibleNavHeader=new s(!0),this.solutionJSON="assets/json/solution.json",this.solutionDetailJSON="assets/json/solution-detail.json"}showFooterSectionVisible(e){this.isVisibleFooterSection.next(e)}getFooterSectionVisible(){return this.isVisibleFooterSection.asObservable()}showNavHeader(e){this.isVisibleNavHeader.next(e)}getNavHeader(){return this.isVisibleNavHeader.asObservable()}getSolutionData(){return this.http.get(this.solutionJSON)}getSolutionDetailData(){return this.http.get(this.solutionDetailJSON)}};t.\u0275fac=function(a){return new(a||t)(r(n))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{c as a};
