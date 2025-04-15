'use client'

import { useState } from 'react'
import {
  Button,
  Checkbox,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Form,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from '@heroui/react'
import Link from 'next/link'
import codes from '@/data/CountryCodes.json'
import { useFormStatus } from 'react-dom'
import { replaceColor } from 'lottie-colorify'
import sentAnimation from '@/public/graphics/animations/sent.json'
import { motion } from 'motion/react'
import { useView } from '@/context/view'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const Contact = ({ fixed }: { fixed?: boolean }) => {
  const [sent, send] = useState<boolean>(false),
    { setView } = useView(),
    [changeCode, setChangeCode] = useState(false),
    [code, setCode] = useState<string>('+33'),
    { pending } = useFormStatus(),
    [privacy, setPrivacy] = useState(false),
    [terms, setTerms] = useState(false),
    { onOpenChange } = useDisclosure()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'name':
        e.target.value = e.target.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, '')
        break
      case 'email':
        e.target.value = e.target.value.replace(/[^a-z0-9@._-]/g, '')
        break
      case 'tel':
        e.target.value = e.target.value.replace(/[^0-9]/g, '')
        break
    }
  }

  return (
    <div
      className={`${fixed ? 'z-10 fixed h-full' : 'h-max md:h-[80vh]'} w-full flex justify-center items-center`}
    >
      <motion.section
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`bg-grey-50 ${fixed ? 'lg:h-[calc(100vh-4vw)] h-[calc(100vh-8vw)]' : 'h-full'} lg:overflow-y-hidden overflow-y-auto w-[92vw] flex flex-col justify-start items-center lg:px-[2vw] px-[4vw] ${fixed ? 'py-[2vh]' : 'pb-[2vh] pt-[6vh]'} md:pb-[8vh] lg:gap-[2vh] rounded-lg relative drop-shadow-2xl`}
      >
        {fixed && (
          <div
            className={
              'w-full flex justify-end items-center absolute top-[2vh] right-[4vw] md:right-[2vw]'
            }
          >
            <button type={'button'} onClick={() => setView(null)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 64 64"
                className={
                  'lg:size-[1.5vw] size-[4vh] lg:hover:rotate-90 transition-transform duration-200 ease-in-out'
                }
              >
                <path d="M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"></path>
              </svg>
            </button>
          </div>
        )}
        <div
          className={
            'w-full h-max md:my-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-[4vh] md:px-[2vw]'
          }
        >
          <div className={'hidden md:flex flex-col w-[64vh] h-full justify-between items-start'}>
            <div className={'w-full flex flex-col justify-center items-start gap-[2vh]'}>
              <h1>Get in Touch</h1>
              <p>
                To Start a conversation about how FliteWatch can serve your business aviation needs,
                please reach out to us
              </p>
              <Connect />
            </div>
            <Social />
          </div>
          <div className={'md:hidden w-full flex flex-col justify-center items-start gap-[2vh]'}>
            <h1>Get in Touch</h1>
            <p>
              To Start a conversation about how FliteWatch can serve your business aviation needs,
              please reach out to us
            </p>
          </div>
          {sent ? (
            <div
              className={
                'containerize md:w-2/5 py-[2vh] flex flex-col justify-center items-center text-center bg-black/25 rounded-2xl gap-[2vh] scale-animation'
              }
            >
              <h3 className={'font-semibold'}>Your message is on the way!</h3>
              <div
                className={
                  'size-[20vh] bg-white rounded-full p-[2vh] flex justify-center items-center'
                }
              >
                <Lottie
                  className={'size-full'}
                  autoplay={true}
                  loop={true}
                  animationData={replaceColor('#000000', '#172554', sentAnimation)}
                />
              </div>
              <p>We&apos;ll get back to you ASAP</p>
            </div>
          ) : (
            <Form
              validationBehavior={'native'}
              /*onSubmit={/!*(e) => sendEmail*!/}*/
              /*action={async (formData) =>
                                                                                        await submit({ formData: formData, dialCode: code }).then(() =>
                                                                                          send(true),
                                                                                        )
                                                                                      }*/
              className={
                'w-full h-full md:w-[56vh] flex flex-col justify-between items-center containerize md:px-[2vw] bg-white gap-[2vh] md:gap-[4vh] py-[2vh] md:py-[4vh] rounded-xl'
              }
            >
              <Input
                label={'Name'}
                type={'text'}
                name={'from_name'}
                isDisabled={pending}
                isRequired
                variant={'underlined'}
                isClearable
                onInput={handleInput}
                errorMessage={'Please enter your name'}
                classNames={{
                  inputWrapper: [
                    'w-full',
                    'bg-transparent',
                    'hover:bg-transparent',
                    'rounded-none',
                    'p-0',
                  ],
                  input: ['w-full', 'bg-transparent', 'text-black', 'text-base'],
                  clearButton: ['text-black'],
                  label: 'uppercase',
                }}
              />
              <Input
                label={'Email'}
                type={'email'}
                name={'email'}
                isDisabled={pending}
                isRequired
                variant={'underlined'}
                isClearable
                errorMessage={'Please enter a valid email address'}
                onInput={handleInput}
                classNames={{
                  inputWrapper: [
                    'w-full',
                    'bg-transparent',
                    'hover:bg-transparent',
                    'rounded-none',
                    'p-0',
                  ],
                  input: ['w-full', 'bg-transparent', 'text-black', 'text-base'],
                  clearButton: ['text-black'],
                  label: 'uppercase',
                }}
              />
              <Input
                label={'Phone'}
                type={'text'}
                name={'tel'}
                isDisabled={pending}
                variant={'underlined'}
                isClearable={true}
                onInput={handleInput}
                classNames={{
                  inputWrapper: [
                    'w-full',
                    'bg-transparent',
                    'hover:bg-transparent',
                    'rounded-none',
                    'p-0',
                  ],
                  input: ['w-full', 'bg-transparent', 'text-black', 'text-base'],
                  clearButton: ['text-black'],
                  label: 'uppercase',
                }}
                startContent={
                  <Dropdown placement={'bottom-start'}>
                    <DropdownTrigger>
                      <Button
                        type={'button'}
                        onPress={() => setChangeCode(!changeCode)}
                        isDisabled={pending}
                        variant={'flat'}
                        endContent={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 72 72"
                            className={`h-[0.88rem] ${changeCode ? '-rotate-180' : 'rotate-0'} transition-transform duration-200 ease-in-out`}
                          >
                            <path d="M35.98,50.002c-1.046,0-2.093-0.395-2.863-1.185L13.595,28.809c-1.542-1.581-1.512-4.114,0.069-5.656	c1.582-1.542,4.113-1.512,5.657,0.069L35.98,40.296l16.698-17.113c1.544-1.582,4.076-1.612,5.657-0.069s1.611,4.075,0.069,5.656	L38.844,48.817C38.073,49.607,37.026,50.002,35.98,50.002z"></path>
                          </svg>
                        }
                        className={'h-[1.5rem] px-[0.5rem] min-w-max'}
                      >
                        {code}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      classNames={{
                        base: 'h-[18vh] overflow-y-auto',
                      }}
                    >
                      {codes.map((sel, i) => (
                        <DropdownItem
                          key={i}
                          onPress={() => {
                            setChangeCode(false)
                            setCode(sel.dial_code)
                          }}
                          classNames={{
                            title: 'text-base',
                            description: 'text-base',
                          }}
                          endContent={<span className={'text-grey-300'}>{sel.name}</span>}
                        >
                          {sel.dial_code}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                }
              />
              <Textarea
                label={'Message'}
                name={'message'}
                isDisabled={pending}
                isRequired
                variant={'underlined'}
                maxRows={3}
                classNames={{
                  inputWrapper: [
                    'w-full',
                    'bg-transparent',
                    'hover:bg-transparent',
                    'rounded-none',
                    'p-0',
                  ],
                  input: ['w-full', 'bg-transparent', 'text-black', 'text-base'],
                  label: 'uppercase',
                }}
              />
              <Checkbox
                isRequired
                isDisabled={pending}
                classNames={{
                  base: 'w-full flex justify-start items-baseline',
                  label: 'text-sm',
                }} /* A link for the privacy policy and ... must be added */
              >
                I agree to the{' '}
                <button
                  type={'button'}
                  className={'text-sm text-black underline'}
                  onClick={() => setPrivacy(true)}
                >
                  privacy policy
                </button>
                <Modal
                  isOpen={privacy}
                  onClose={() => setPrivacy(false)}
                  onOpenChange={onOpenChange}
                  backdrop={'blur'}
                >
                  <ModalContent>
                    <>
                      <ModalHeader>Privacy Policy</ModalHeader>
                      <ModalBody>
                        <p>
                          Aequea adolescens viderer graece eleifend laudem accusata nunc saperet
                          possim. Euaptent molestie ultricies inimicus impetus nam imperdiet
                          posidonium praesent duis dictumst ridens tacimates porta. Loremleo discere
                          utinam ante qualisque euripidis interesset alienum quam gravida eum
                          accommodare mi utroque quod aliquet magna. Accusatamorbi tacimates sit
                          sodales no tellus pulvinar. Vulputatefabellas quot saperet scelerisque
                          graece deserunt sapien salutatus homero deserunt dicunt homero pericula
                          proin libero singulis explicari mnesarchum. Quamdissentiunt ubique
                          quaerendum animal tristique in blandit mea eam te audire scelerisque.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color={'danger'} variant={'flat'} onPress={() => setPrivacy(false)}>
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  </ModalContent>
                </Modal>{' '}
                &{' '}
                <button
                  type={'button'}
                  className={'text-sm text-black underline'}
                  onClick={() => setTerms(true)}
                >
                  terms and conditions
                </button>
                <Modal
                  isOpen={terms}
                  onClose={() => setTerms(false)}
                  onOpenChange={onOpenChange}
                  backdrop={'blur'}
                >
                  <ModalContent>
                    <>
                      <ModalHeader>Terms & Conditions</ModalHeader>
                      <ModalBody>
                        <p>
                          Blandithabitasse sociosqu nisi aptent fabellas viderer voluptaria non
                          verear idque saepe nibh phasellus solet. Mandamusdocendi magnis a cum
                          veritus dicam simul solet mei habemus. Repudiandaedeseruisse scripta
                          adolescens vestibulum dignissim consetetur legimus venenatis sale prompta
                          donec docendi nec nunc posidonium quot partiendo penatibus. Suavitatenec
                          porta dolor tale condimentum ad gloriatur dicant wisi hac iusto invidunt
                          noster maiestatis sociis eripuit viris. Pulvinarwisi usu an elit verterem
                          sapien tota fastidii delicata brute cras intellegat error congue eos
                          necessitatibus dico posse.
                        </p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color={'danger'} variant={'flat'} onPress={() => setTerms(false)}>
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  </ModalContent>
                </Modal>
              </Checkbox>
              <Button
                isDisabled={pending}
                type={'submit'}
                className={'rounded-lg px-[5rem] bg-grey-100 font-medium'}
              >
                Send
              </Button>
            </Form>
          )}
          <div className={'md:hidden w-full flex flex-col justify-center items-start gap-[2vh]'}>
            <Connect />
          </div>
          <div className={'md:hidden w-full flex flex-col justify-center items-center gap-[2vh]'}>
            <div className={'w-full h-[0.25vh] bg-white'} />
            <Social />
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export const Social = () => {
  return (
    <div className={'flex flex-col justify-center items-start w-full gap-[2vh]'}>
      <a href={'https://maps.app.goo.gl/5qU836EQ6UYXEi3X8'} target={'_blank'}>
        <label className={'normal-case cursor-pointer'}>
          <span className={'font-bold uppercase'}>Headquarters</span>
          <br />
          77 Triq Windsor,
          <br />
          Sliema, SLM1853,
          <br />
          Malta
        </label>
      </a>
    </div>
  )
}

export const Connect = () => (
  <div className={'w-full flex justify-start items-center flex-wrap gap-[1vh] uppercase'}>
    <Button
      as={Link}
      href={'https://wa.me/00447585663531'}
      target={'_blank'}
      variant={'solid'}
      radius={'sm'}
      startContent={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 64 64"
          className={'h-[1.25rem] mb-[0.25rem] w-auto'}
        >
          <path d="M 32 10 C 19.85 10 10 19.85 10 32 C 10 36.065 11.10725 39.869719 13.03125 43.136719 L 10.214844 53.683594 L 21.277344 51.208984 C 24.450344 52.983984 28.106 54 32 54 C 44.15 54 54 44.15 54 32 C 54 19.85 44.15 10 32 10 z M 32 14 C 41.941 14 50 22.059 50 32 C 50 41.941 41.941 50 32 50 C 28.269 50 24.803687 48.864875 21.929688 46.921875 L 15.791016 48.294922 L 17.353516 42.439453 C 15.250516 39.493453 14 35.896 14 32 C 14 22.059 22.059 14 32 14 z M 24.472656 21.736328 C 24.105656 21.736328 23.515672 21.871969 23.013672 22.417969 C 22.520672 22.964969 21.113281 24.278844 21.113281 26.964844 C 21.113281 29.640844 23.057078 32.23675 23.330078 32.59375 C 23.603078 32.96075 27.100531 38.639266 32.644531 40.822266 C 37.240531 42.632266 38.179547 42.273688 39.185547 42.179688 C 40.183547 42.093688 42.408328 40.866703 42.861328 39.595703 C 43.313328 38.323703 43.312875 37.232906 43.171875 37.003906 C 43.034875 36.781906 42.676859 36.644094 42.130859 36.371094 C 41.584859 36.097094 38.906297 34.777656 38.404297 34.597656 C 37.909297 34.417656 37.542547 34.323141 37.185547 34.869141 C 36.818547 35.415141 35.778125 36.643953 35.453125 37.001953 C 35.138125 37.368953 34.823344 37.411672 34.277344 37.138672 C 33.731344 36.865672 31.975531 36.292594 29.894531 34.433594 C 28.275531 32.992594 27.182188 31.208063 26.867188 30.664062 C 26.551188 30.119062 26.832469 29.821828 27.105469 29.548828 C 27.353469 29.310828 27.652781 28.916563 27.925781 28.601562 C 28.189781 28.277563 28.282891 28.056453 28.462891 27.689453 C 28.651891 27.332453 28.555922 27.007375 28.419922 26.734375 C 28.284922 26.460375 27.226234 23.765406 26.740234 22.691406 C 26.332234 21.787406 25.905672 21.760953 25.513672 21.751953 C 25.196672 21.735953 24.829656 21.736328 24.472656 21.736328 z"></path>
        </svg>
      }
      className={'text-sm gap-[0.1rem] items-center bg-white'}
    >
      WhatsApp
    </Button>
    <Button
      as={Link}
      href={'mailto:fly@flitewatch.aero'}
      variant={'solid'}
      radius={'sm'}
      className={'text-sm bg-white'}
    >
      fly@flitewatch.aero
    </Button>
    <Button as={Link} href={'tel:+35620934300'} className={'text-sm bg-white'} radius={'sm'}>
      +356 20934300
    </Button>
  </div>
)

export default Contact
