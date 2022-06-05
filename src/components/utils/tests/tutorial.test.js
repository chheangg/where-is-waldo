import { screen, render } from "@testing-library/react";
import Tutorial from "../tutorial";
import defaultIcon from "../../assets/account-circle.svg"

const characters = [
  {
    name: 'foo',
    image: defaultIcon,
  },
  {
    name: 'bar',
    image: defaultIcon,
  },
  {
    name: 'foobar',
    image: defaultIcon,
  },
]

describe('Tutorial Component', () => {
  it('#1.1 Tutorial renders correctly', () => {
    render(<Tutorial characters={characters}/>);

    const images = screen.queryAllByRole('img');
    const charList = screen.queryAllByTestId('characters');
    const button = screen.getByRole('button');

    expect(screen.getByText('សូមស្វាគមន៍!')).toBeInTheDocument();
    expect(images.length).toBe(3);
    expect(charList.length).toBe(3);
    expect(charList[0].textContent).toMatch(/foo/);
    expect(charList[1].textContent).toMatch(/bar/);
    expect(charList[2].textContent).toMatch(/foobar/);
    expect(button).toBeInTheDocument();
  })
})