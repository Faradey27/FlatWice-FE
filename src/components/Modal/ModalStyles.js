export default `
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.75);
  }
  .modalBody {
    position: relative;
    z-index: 11;
  }
`;
