const Container = ({ className, children }) => {
  const defaultClasses = 'relative px-4 sm:px-8 lg:px-12 py-4';

  const classes = className
    ? defaultClasses.concat(' ', className)
    : defaultClasses;

  return <div className={classes}>{children}</div>;
};

export default Container;
