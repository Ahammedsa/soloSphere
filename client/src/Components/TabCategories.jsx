import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategories = () => {
    return (
        <div className='container px-6 py-10 mx-aut'>
            <Tabs>
                 <h1 className='text-2xl font-semibold text-center text-grey-500'>
                     Browse Job Categories
                 </h1>
                 <p className='max-w-2xl mx-auto my-6 text-center text-grey-500'> 
                 Quickly reintermediate open-source systems for user-centric metrics. Collaboratively e-enable team driven resources via vertical bandwidth. Intrinsicly create ubiquitous convergence for frictionless sources


                 </p>
                <div className='flex justify-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                   <div>
                    <JobCard></JobCard>
                   </div>
                </TabPanel>
                <TabPanel>
                <JobCard></JobCard>
                </TabPanel>
                <TabPanel>
                <JobCard></JobCard>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCategories;