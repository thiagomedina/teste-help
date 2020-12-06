import React from "react";
import {pageHeader, headerContent} from './styles.module.scss';

const PageHeader = ({ description, title }) => {
  return (
    <header className={pageHeader}>
      <div className={headerContent}>
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </div>
    </header>
  );
};

export default PageHeader;
