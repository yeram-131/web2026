// common.js 파일 내용

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const dropdown = document.querySelector('.dropdown');

    if (hamburger && dropdown) {
        // 햄버거 버튼을 클릭했을 때 작동
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation(); // 클릭 이벤트가 바깥으로 퍼지는 것 방지
            
            // .show 클래스를 넣었다 뺐다(Toggle) 함
            dropdown.classList.toggle('show');
        });

        // 메뉴판 바깥의 빈 화면을 클릭하면 메뉴가 자동으로 닫히게 설정
        document.addEventListener('click', function() {
            dropdown.classList.remove('show');
        });
    }
});

// 공통 로그아웃 함수 (기존과 동일)
function logout() {
    localStorage.removeItem('loggedInUser');
    alert('로그아웃되었습니다. 또 만나요!');
    location.href = 'login.html';
}