import { Component } from 'react';
import { string, node, oneOfType } from 'prop-types';
import Link from 'next/link';

class LinkWrap extends Component {
  static propTypes = {
    children: oneOfType([string, node]).isRequired,
    href: string,
  }

  render() {
    return (
      <Link href={this.props.href}>
        {this.props.children}
      </Link>
    );
  }
}

export default LinkWrap;
