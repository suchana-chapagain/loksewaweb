const pdfUrls = [
    'https://firebasestorage.googleapis.com/v0/b/loksewa-authentication.appspot.com/o/ModelSets%2FComputerOperator%2FAnuj%20Acharya_CV.pdf?alt=media&token=57c1c5e1-7c62-4e58-8bc7-2d6c72e372cd',
    'https://firebasestorage.googleapis.com/v0/b/loksewa-authentication.appspot.com/o/ModelSets%2FComputerOperator%2FSuchana_CV.pdf?alt=media&token=fb2e3a8a-6eff-48bd-9984-7466edff73ab'
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
  