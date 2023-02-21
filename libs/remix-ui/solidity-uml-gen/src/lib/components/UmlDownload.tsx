import { CustomTooltip } from '@remix-ui/helper'
import React, { Fragment, Ref } from 'react'
import { Dropdown } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'

const _paq = window._paq = window._paq || []

export const Markup = React.forwardRef(({ children, onClick, icon, className = '' }: { children: React.ReactNode, 
  onClick: (e) => void, icon: string, className: string }, ref: Ref<HTMLButtonElement>) => (
  <button
    ref={ref}
    onClick={(e) => {
      e.preventDefault()
      onClick(e)
    }}
    className={className.replace('dropdown-toggle', '')}
  >
    <i className={icon}></i>
  </button>
))

export const UmlCustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }: { children: React.ReactNode, style?: React.CSSProperties, className: string, 'aria-labelledby'?: string }, ref: Ref<HTMLDivElement>) => {
    const height = window.innerHeight * 0.6
    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="overflow-auto list-unstyled mb-0" style={{ maxHeight: height+'px' }}>
          {
           children
          }
        </ul>
      </div>
    )
  },
)

export default function UmlDownload() {

  const downloadAsPng = () => {
    // convert serialized svg to png and download

  }

  const downloadAsPdf = () => {
    // convert serialized svg to pdf and download
  }

  return(
    <Fragment>
      <Dropdown id="solUmlMenuDropdown">
        <Dropdown.Toggle
          icon="far fa-arrow-to-bottom align-item-center d-flex justify-content-center"
          as={Markup}
          className="badge badge-info remixui_no-shadow p-2 rounded-circle mr-2"
        >
        </Dropdown.Toggle>
        <Dropdown.Menu as={UmlCustomMenu} className="custom-dropdown-items">
          <Dropdown.Item onClick={downloadAsPng}>
            <CustomTooltip
                placement="left-start"
                tooltipId="solUmlgenDownloadAsPngTooltip"
                tooltipClasses="text-nowrap"
                tooltipText={'Download UML diagram as a PNG file'}
            >
                <div
                  data-id='umlPngDownload'
                  onClick={() => {
                    _paq.push(['trackEvent', 'solUmlgen', 'download', 'downloadAsPng'])
                  }}
                >
                  <span
                    id='umlPngDownloadBtn'
                    data-id='umlPngDownload'
                    onClick={() => {
                      _paq.push(['trackEvent', 'solUmlgen', 'download', 'downloadAsPng'])
                    }}
                    className='far fa-image pl-2'
                  >
                  </span>
                  <span className="pl-1">
                    Download as PNG
                  </span>
                </div>
              </CustomTooltip>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <CustomTooltip
                  placement="left-start"
                  tooltipId="solUmlgenDownloadAsPdfTooltip"
                  tooltipClasses="text-nowrap"
                  tooltipText={'Download UML diagram as a PDF file'}
              >
                <div
                  data-id='umlPdfDownload'
                  onClick={() => {
                    _paq.push(['trackEvent', 'solUmlgen', 'download', 'downloadAsPdf'])
                  }}
                >
                  <span
                    id='umlPdfDownloadBtn'
                    data-id='umlPdfDownload'
                    onClick={() => {
                      _paq.push(['trackEvent', 'solUmlgen', 'download', 'downloadAsPdf'])
                    }}
                    className='far fa-file-pdf pl-2'
                  >
                  </span>
                  <span className="pl-2">
                    Download as PDF
                  </span>
                </div>
              </CustomTooltip>
            </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  )
}

