import React from 'react';
import { FlexContainer, Skeleton } from './skeleton-page.style';

/**
 *
 * @returns
 */
const SkeletonPage: React.FC = () => {
  return (
    <FlexContainer>
      <Skeleton width="90%" className={`rect wave`} />
      <Skeleton width="70%" className={`rect wave`} />
      <Skeleton width="60%" className={`rect wave`} />
      <Skeleton width="65%" className={`rect wave`} />
      <Skeleton width="100%" className={`rect wave`} />
      <Skeleton width="65%" className={`rect wave`} />
      <Skeleton width="90%" className={`rect wave`} />
      <Skeleton width="100%" className={`rect wave`} />
      <Skeleton width="90%" className={`rect wave`} />
    </FlexContainer>
  );
};

export default SkeletonPage;
