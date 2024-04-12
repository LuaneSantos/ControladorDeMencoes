function calculateGrades() {
      const grades = document.getElementsByClassName('grade');
      let mbCount = 0,
        bCount = 0,
        rCount = 0,
        iCount = 0;

      for (let i = 0; i < grades.length; i++) {
        const selectedGrade = grades[i].value;
        switch (selectedGrade) {
          case 'MB':
            mbCount++;
            break;
          case 'B':
            bCount++;
            break;
          case 'R':
            rCount++;
            break;
          case 'I':
            iCount++;
            break;
          default:
            break;
        }
      }


      document.getElementById('mbCount').textContent = mbCount;
      document.getElementById('bCount').textContent = bCount;
      document.getElementById('rCount').textContent = rCount;
      document.getElementById('iCount').textContent = iCount;
    }

    function clearGrades() {
      const grades = document.getElementsByClassName('grade');
      for (let i = 0; i < grades.length; i++) {
        grades[i].value = '';
      }

    
      document.getElementById('mbCount').textContent = '0';
      document.getElementById('bCount').textContent = '0';
      document.getElementById('rCount').textContent = '0';
      document.getElementById('iCount').textContent = '0';
    }




