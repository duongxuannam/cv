import { styled } from "styled-components"
import src from './nam2.jpeg'

interface SizeBoxProps {
  h?: string;
  w?: string
}

const SizeBox = styled.div<SizeBoxProps>`
  height: ${props => props.h ? `${props.h}px` : null};
  width: ${props => props.w ? `${props.w}px` : null};

`

const Container = styled.div`
  background-color: white;
  width: 700px;
  min-height: 100vh;
  padding: 50px 150px;
  border: 1px solid black;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Title = styled.span`
  color: rgb(60,120,216);
  font-size: 25px;
  font-weight: 500;
`
const Text = styled.span`
    font-size: 20px;
    font-weight: 500;
    display: block;
    line-height: 25px;
`
const Li = styled.li`
      font-size: 20px;
      margin-left: 20px;

`

function App() {

  return (
    <>
      <Container>
        <Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Title>
              Info
            </Title>
            <SizeBox h="20" />
            <Text>
              Duong Xuan Nam 
            </Text>
            <SizeBox h="3" />

            <Text>
              Mobile Developer
            </Text>
            <SizeBox h="3" />

            <Text>
              Ho Chi Minh City, Viet Nam
            </Text>
            <SizeBox h="3" />
            <Text>
              Contact:
            </Text>
            <Li>
              Phone: 0353264570
            </Li>
            <SizeBox h="3" />
            <Li>
              Email: duongxuannam1995@gmail.com
            </Li>

          </div>
          <div>
            <img
              src={src}
              style={{ width: 150, borderRadius: 20, aspectRatio: 1, objectFit: 'unset' }}
            />
          </div>

        </Row>
        <SizeBox h="30" />
        <Title>
          Abstract
        </Title>
        <SizeBox h="20" />

        <Li>
          A mobile developer with 6+ years of practical programming experience.
        </Li>
        <SizeBox h="3" />

        <Li>
          Familiar with React Native, react js and basic native mobile.
        </Li>
        <SizeBox h="3" />

        <Li>
          Having the ability to build the backend with common functions, full basic flow to  communicate between backend and client.
        </Li>
        <SizeBox h="3" />

        <Li>
          Learning new languages or platforms quickly with a positive attitude. Can join in all  processes of product development from scratch to release.
        </Li>

        <SizeBox h="30" />
        <Title>
          Publication
        </Title>
        <SizeBox h="20" />
        <Text style={{ fontWeight: 'bold' }}>My contributions to the community</Text>
        <SizeBox h="3" />

        <Text>
          React-native-zoom-lightbox: <a target="_blank" href='https://github.com/duongxuannam/react-native-zoom-lightbox'>https://github.com/duongxuannam/react-native-zoom-lightbox</a>
        </Text>
        <SizeBox h="3" />

        <Text>
          React-native-check-notification-permission: <a target="_blank" href="https://github.com/duongxuannam/react-native-check-notification-permission">https://github.com/duongxuannam/react-native-check-notification-permission</a>
        </Text>

        <SizeBox h="30" />
        <Title>
          Experience
        </Title>
        <SizeBox h="20" />

        <Text style={{ fontWeight: 'bold' }}>
          Frontend Developer | Arbin instruments
        </Text>
        <Text>
          08/2023 - Now
        </Text>
        <SizeBox h="10" />
        <Li>
        Build ui component kit and develop admin dashboard from scratch
        </Li>
        <Li>
        Develop an application page to operate the battery testing machine from the legacy Winform application, support both desktop application(mac, win, linux) and web version with Tauri and Vite.
        </Li>
        <SizeBox h="3" />
        <Li>
        Build MVP version universal app for EMS(electric management systems) with React Native Export (Inprogress)
        </Li>
        <SizeBox h="3" />
       
        <SizeBox h="20" />


        <Text style={{ fontWeight: 'bold' }}>
          Frontend Developer | Tiki
        </Text>
        <Text>
          03/2021 - 06/2023
        </Text>
        <SizeBox h="10" />
        <Li>
          React native - Maintaining and developing features for seller and admin app. Implementing web admin screens on mobile app as a mini app.
        </Li>
        <SizeBox h="3" />
        <Li>
          React js - Working with seller, admin dashboard, maintaining and developing features.
        </Li>
        <SizeBox h="3" />
        <Li>
          Owning the Warehouse domain on Seller center(inventory reports, requisitions, withdraws, etc.) and deploying it on micro frontend with qiankun.
        </Li>


        <SizeBox h="20" />
        <Text style={{ fontWeight: 'bold' }}>
          React native Developer | Deliveree
        </Text>
        <Text>
          06/2020 - 02/2021
        </Text>
        <SizeBox h="10" />
        <Li>
          React native - Developing and maintaining a standalone mobile app for the domain of parcel delivery and shipment for both customers and truck drivers.
        </Li>
        <SizeBox h="3" />
        <Li>
          Initiate & integrate Mini App (Reat native) to customer native app (Swift and Kotlin) as a module
        </Li>
        <SizeBox h="3" />
        <Li>
          React js - Fixing bugs and developing features for Driver and Admin dashboard.
        </Li>

        <SizeBox h="20" />
        <Text style={{ fontWeight: 'bold' }}>
          React native Developer | Logivan
        </Text>
        <Text>
          09/2019 - 05/2020
        </Text>
        <SizeBox h="10" />
        <Li>
          <a target="_blank" href="https://apps.apple.com/us/app/logivan-ch%E1%BB%A7-h%C3%A0ng/id1386678770">Chủ hàng Logivan</a> (React native) - The application allows users to select and book vehicles for transporting goods (stringge call, notification, realtime map(Firebase), CICD (bitrise), unit test (jest), code push).
        </Li>
        <SizeBox h="3" />
        <Li>
          <a target="_blank" href="https://apps.apple.com/us/app/logivan-ch%E1%BB%A7-xe/id1333598414">Chủ xe Logivan</a> (React native) - The application allows drivers to update their location and delivery progress (location tracking, stringge call, notification, realtime map(Firebase), CICD (bitrise), unit test (jest), code push)
        </Li>
        <SizeBox h="3" />
        <Li>
          React js - Supporting bug fixing and maintenance for the admin dashboard.
        </Li>


        <SizeBox h="20" />
        <Text style={{ fontWeight: 'bold' }}>
          Front-end Developer | Cititech
        </Text>
        <Text>
          06/2018 - 09/2019
        </Text>
        <SizeBox h="10" />
        <Li>
          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.travelbadger">Travel badger</a> (React native) - The MVP application allows users to book and pay for rooms (using Stripe).
        </Li>
        <SizeBox h="3" />
        <Li>
          <a target="_blank" href="https://apps.apple.com/vn/app/weva/id1446252222?l=vi">Weva</a>, <a target="_blank" href="https://play.google.com/store/apps/details?id=com.weva_sales&hl=vi">Weva Sales</a>, <a target="_blank" href="https://play.google.com/store/apps/details?id=com.wevaangels&hl=vi">Weva Angle</a> - Internal apps for beauty systems that allow users and technicians to digitize workflows (real time chat, notification, codepush).
        </Li>
        <SizeBox h="3" />
        <Li>
          Support backend team (node js) and frontend team (react js)
        </Li>

        <SizeBox h="30" />
        <Title>
          Key Skills
        </Title>
        <SizeBox h="20" />
        <Text style={{ fontWeight: 'bold' }}>
          Mobile
        </Text>
        <SizeBox h="3" />
        <Li>
          React native (5+ years' experience)
        </Li>
        <SizeBox h="3" />
        <Li>
          Flutter basic understand
        </Li>
        <SizeBox h="3" />
        <Li>
          Basic understanding of iOS and Android to implement simple native modules for React Native or Flutter if needed.
        </Li>

        <SizeBox h="20" />
        <Text style={{ fontWeight: 'bold' }}>
          Other
        </Text>

        <SizeBox h="3" />
        <Li>
          Frontend: Able to work effectively alone or with colleagues using React and Next.js
        </Li>
        <SizeBox h="3" />
        <Li>
          Backend basic understanding: NodeJS (Auth, RESTful API, SocketIO), Firebase (Authentication, Database, Functions, Storage, Hosting, Cloud Messaging)
        </Li>
        <SizeBox h="3" />
        <Li>
          CICD, codepush with Bitrise and AppCenter
        </Li>



        <SizeBox h="30" />
        <Title>
          Soft Skills
        </Title>
        <SizeBox h="20" />
        <Li>
          Willing to exchange, share and discuss technical and technological issues with  enthusiasm
        </Li>
        <SizeBox h="3" />

        <Li>
          Cheerful personality, sociable, easy to cooperate with everyone in team
        </Li>
      </Container>
    </>
  )
}

export default App
