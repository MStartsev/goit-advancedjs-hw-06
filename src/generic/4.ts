/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  title: string;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Example of using the Page class
const samplePage = new Page({ title: "Sample Page" });
samplePage.pageInfo();

export {};
