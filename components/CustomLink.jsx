import UnstyledLink from './UnstyledLink';

export default function CustomLink({ className = '', ...rest }) {
  return (
    <UnstyledLink
      {...rest}
      className={`inline-block font-bold hover:text-primary-400 animated-underline ${className}`}
    />
  );
}
