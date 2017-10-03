export default `
  .card-body {
    width: 100%;
    padding: 10px 30px 0 30px;
  }
  .card-body-title {
    font-size: 20px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1.5rem;
    max-height: 6rem;
  }
  .card-body-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 1.5rem;
    max-height: 6rem;
    font-size: 16px;
    color: rgba(0,0,0,.5);
  }
`;
