import { useParams } from 'react-router-dom';
import AddingIdeas from '../components/AddingIdeas';
import Details from '../components/Details';
import AllIdeas from '../components/AllIdeas';
import EditingIdea from '../components/EditingIdea';


function ActionPage() {
    const { navSwitch, } = useParams()
    const isAdmin = localStorage.getItem('isAdmin')
    return (
        <div>
            <div>
                {navSwitch == 'add' ? < AddingIdeas />
                    : navSwitch == 'detail' ? < Details />
                        : navSwitch == 'editing' ? < EditingIdea />
                            : navSwitch == 'ideaState' ? < AllIdeas />
                                : 'nothing'
                }
            </div>
        </div>
    )
}

export default ActionPage