const Container = ({ className, style, children }) => {
  const defaultClasses = 'relative px-4 sm:px-8 lg:px-12 py-4 mx-auto';

  const classes = className
    ? defaultClasses.concat(' ', className)
    : defaultClasses;

  return (
    <div className={classes} style={{ ...style, maxWidth: '2500px' }}>
      {children}
    </div>
  );
};

export default Container;
