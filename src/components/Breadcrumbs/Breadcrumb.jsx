import { Link } from 'react-router-dom';

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="mb-10 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* <h2 className="text-title-md5 font-semibold text-black mb-5 ">
        {pageName}
      </h2> */}

      <nav>
        <ol className="flex items-center gap-2 md-5">
          <li>
            <Link className="font-medium md-5" to="/">
              Dashboard /
            </Link>
          </li>
          <li className="font-medium text-primary mb-15">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
