import { Component } from 'react';
import { string, node, oneOfType, boolean } from 'prop-types';
import Link from 'next/link';

class LinkWrap extends Component {
  static propTypes = {
    children: oneOfType([string, node]).isRequired,
    href: string,
    shallow: boolean,
  }

  render() {
    return (
      <Link
        href={this.props.href}
        prefetch={process.env.NODE_ENV === 'production'}
        shallow={this.props.shallow}
      >
        {this.props.children}
      </Link>
    );
  }
}

export default LinkWrap;
