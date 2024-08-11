const pdfUrls = [
    'https://firebasestorage.googleapis.com/v0/b/loksewa-authentication.appspot.com/o/ModelSets%2FComputerOperator%2FLoksewa%20Operator%20-1.pdf?alt=media&token=d92080d6-ce1e-4518-b8ca-cc5b4600c686',
    'https://firebasestorage.googleapis.com/v0/b/loksewa-authentication.appspot.com/o/ModelSets%2FComputerOperator%2FLoksewa%20Operator%20-2.pdf?alt=media&token=523e0f4c-273f-44d6-8761-7439f964da24'
  ];
  
  const scale = 1.5;
  let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;
  
  const viewer = document.querySelector('#pdf-viewer');
  const canvas = viewer.querySelector('.pdf-render');
  const ctx = canvas.getContext('2d');
  
  const renderPage = num => {
    pageIsRendering = true;
  
    pdfDoc.getPage(num).then(page => {
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
  
      const renderCtx = {
        canvasContext: ctx,
        viewport
      };
  
      page.render(renderCtx).promise.then(() => {
        pageIsRendering = false;
  
        if (pageNumIsPending !== null) {
          renderPage(pageNumIsPending);
          pageNumIsPending = null;
        }
      });
  
      viewer.querySelector('.page-num').textContent = num;
    });
  };
  
  const queueRenderPage = num => {
    if (pageIsRendering) {
      pageNumIsPending = num;
    } else {
      renderPage(num);
    }
  };
  
  const showPrevPage = () => {
    if (pageNum <= 1) {
      return;
    }
    pageNum--;
    queueRenderPage(pageNum);
  };
  
  const showNextPage = () => {
    if (pageNum >= pdfDoc.numPages) {
      return;
    }
    pageNum++;
    queueRenderPage(pageNum);
  };
  
  const loadPdf = pdfUrl => {
    pdfjsLib
      .getDocument(pdfUrl)
      .promise.then(pdfDoc_ => {
        pdfDoc = pdfDoc_;
        viewer.querySelector('.page-count').textContent = pdfDoc.numPages;
        pageNum = 1;
        renderPage(pageNum);
      })
      .catch(err => {
        const div = document.createElement('div');
        div.className = 'error';
        div.appendChild(document.createTextNode(err.message));
        viewer.insertBefore(div, canvas);
        viewer.querySelector('.top-bar').style.display = 'none';
      });
  };
  
  document.querySelector('.prev-page').addEventListener('click', showPrevPage);
  document.querySelector('.next-page').addEventListener('click', showNextPage);
  
  document.getElementById('modelSelect1').addEventListener('click', () => loadPdf(pdfUrls[0]));
  document.getElementById('modelSelect2').addEventListener('click', () => loadPdf(pdfUrls[1]));
  document.getElementById('gkSelect1').addEventListener('click', () => loadPdf(pdfUrls[0]));
  document.getElementById('gkSelect2').addEventListener('click', () => loadPdf(pdfUrls[1]));
  document.getElementById('jobSelect1').addEventListener('click', () => loadPdf(pdfUrls[0]));
  document.getElementById('jobSelect2').addEventListener('click', () => loadPdf(pdfUrls[1]));
  