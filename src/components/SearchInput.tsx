import { Input, ConfigProvider } from 'antd';
const { Search } = Input;

const SearchInput = ({
  value,
  onChange,
  onSearch,
  loading,
}: {
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  loading: boolean;
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#f58503',
        },
      }}
    >
      <Search
        placeholder="input search text"
        enterButton="Search"
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        loading={loading}
      />
    </ConfigProvider>
  );
};

export default SearchInput;
