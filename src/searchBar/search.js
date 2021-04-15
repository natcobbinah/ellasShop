import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { data } from '../dummydata/dropdownSearchdata.js'

const SearchField = () => {
    return (
                    <InputGroup className="my-3 mr-5" size="lg">
                      <DropdownButton
                        as={InputGroup.Prepend}
                        variant="secondary"
                        title={data[0]}
                         id="input-group-dropdown-1"
                    >
                    {data?
                        data.map(list => (
                            <Dropdown.Item href="#">{ list }</Dropdown.Item>
                        ))
                        :
                        null        
                    }        
                    </DropdownButton>
            
                    <FormControl aria-describedby="basic-addon1" />

                    <InputGroup.Append>
                    <Button variant="secondary">Search</Button>
                    </InputGroup.Append>
                    </InputGroup>
                  
    )
}

export default SearchField;