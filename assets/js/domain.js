var getDomain = window.location.hostname;

var targetDomain = '';

if(getDomain =='salk.co.kr' || getDomain == 'sugarmandev.github.io') {
  targetDomain = 'http://api.sugarmanwork.com/salk';
}
else {
  targetDomain = 'http://localhost/salk';
}
