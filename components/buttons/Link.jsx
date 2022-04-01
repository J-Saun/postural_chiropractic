import React from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...other }) {
  // Pass Any internal link to Next.js Link, for anything else, use <a> tag
  const internal = /^\/(?!\/)/.test(href);
  if (internal) {
    return (
      <NextLink href={href}>
        <a {...other}>{children}</a>
      </NextLink>
    );
  }

  return (
    <a className={'nav-link'} href={href} {...other}>
      {children}
    </a>
  );
}

// export function ActionLink(props) {
//   // Pass Any internal link to Next.js Link, for anything else, use <a> tag
//   // const internal = /^\/(?!\/)/.test(href);
//   // if (internal) {
//   //   return (
//   //     <NextLink href={href}>
//   //       <a {...other}>{children}</a>
//   //     </NextLink>
//   //   );
//   // }

//   const { action,url, label,} = props;
//   // const  = _.get(action, 'url');
//   // const  = _.get(action, 'label');
//   // const newWindow = _.get(action, 'new_window');
//   // const noFollow = _.get(action, 'no_follow');
//   // const attrs = {};
//   // if (newWindow) {
//   //     attrs.target = '_blank';
//   // }
//   // if (newWindow || noFollow) {
//   //     attrs.rel = [(newWindow ? 'noopener' : ''), (noFollow ? 'nofollow' : '')].filter(Boolean).join(' ');
//   // }

//   return (
//     <Link href={href}>
//       {label}
//     </Link>
//   );
// }
