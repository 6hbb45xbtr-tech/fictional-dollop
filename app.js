const demo=document.getElementById('demo');
document.getElementById('playBtn').addEventListener('click',()=>{
  demo.play().catch(e=>console.log('Playback needs a tap:',e));
});
const link = location.origin + '/install?vol=bedtime8&user=ANC';
document.getElementById('qrBtn').href = '/api/qr?link=' + encodeURIComponent(link);